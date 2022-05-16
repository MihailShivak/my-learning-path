import { NextApiRequest, NextApiResponse } from "next"

export default function echo(req: NextApiRequest, res:NextApiResponse){
   res.statusCode = 200
   res.setHeader('Content-Type','application/json')
   res.end(JSON.stringify({
      message: req.query.message ?? 'Base message'
   }))
}