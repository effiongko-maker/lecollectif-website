// Proof-of-concept preview: email delivery deliberately disabled.
export async function POST() {
  return Response.json({message:"Online submissions are temporarily unavailable. Please email info@lecollectif.ng."}, {status:503});
}
