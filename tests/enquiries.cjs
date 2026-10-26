/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS test harness for isolated route testing. */
const ts=require('typescript'),fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
const source=ts.transpileModule(fs.readFileSync('src/app/api/enquiries/route.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
async function run(){
 const context={exports:{},require,Buffer,Response,Request,AbortSignal,process:{env:{SITE_ORIGIN:'https://test.local'}},fetch:async()=>{throw Error('unexpected transport')}};
 vm.runInNewContext(source,context);const post=context.exports.POST;
 const payload={type:'enquiry',details:{fullName:'Test Visitor',email:'visitor@example.com',topic:'Workspace',message:'Test only'}};
 const request=(data=payload,origin='https://test.local')=>new Request('https://test.local/api/enquiries',{method:'POST',headers:{origin,'content-type':'application/json'},body:JSON.stringify(data)});
 assert.equal((await post(request(payload,'https://evil.local'))).status,403);
 assert.equal((await post(request({...payload,website:'spam'}))).status,400);
 assert.equal((await post(request({...payload,details:{...payload.details,email:'bad\r\nemail'}}))).status,400);
 assert.equal((await post(request())).status,503);
 context.process.env.RESEND_API_KEY='test-key';context.process.env.ENQUIRY_FROM='approved@example.com';let keys=[];
 context.fetch=async(url,options)=>{const email=JSON.parse(options.body);assert.deepEqual(email.to,['info@lecollectif.ng']);assert.equal(email.reply_to,'visitor@example.com');assert.equal(email.from,'approved@example.com');assert.ok(email.text.includes('Test only'));keys.push(options.headers['Idempotency-Key']);return Response.json({id:'test-reference'});};
 assert.equal((await post(request())).status,202);assert.equal((await post(request())).status,202);assert.equal(keys[0],keys[1]);
 context.fetch=async()=>Response.json({error:'rejected'},{status:401});assert.equal((await post(request())).status,502);
 context.fetch=async()=>{throw Error('timeout')};assert.equal((await post(request())).status,502);
 assert.equal((await post(request())).status,429);
 for(const type of ['workspace','reservation','event']){
 const details={fullName:'Booking Test',email:`${type}@example.com`,phone:'+2348000000000',date:'2027-01-01',spaceId:'coworking',startTime:'10:00',duration:'1',notes:'Test only',time:'10:00',guests:'2',eventType:'meeting'};
 context.fetch=async()=>Response.json({id:'booking-test'});assert.equal((await post(request({type,details}))).status,202);
 }
 console.log('PASS: origin, honeypot, validation, missing configuration, fixed recipient, Reply-To, stable duplicate key, provider acceptance/rejection, timeout, rate limit and all request types. Mock transport only; no live email sent.');
}run().catch(e=>{console.error(e);process.exitCode=1});
