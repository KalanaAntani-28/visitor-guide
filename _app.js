export const config = {
  api: {
    externalResolver: true,
  },
};

export default function handler(req, res) {
  res.setHeader("Server", "");
  res.setHeader("X-Powered-By", "");  // remove Next.js signature
  res.status(200).json({ ok: true });
}
