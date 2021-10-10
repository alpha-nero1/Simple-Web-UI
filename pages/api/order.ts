import { NextApiRequest, NextApiResponse } from "next";

type Data = {
    id: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const orderNumber = Math.floor(Math.random() * 1000000);
    setTimeout(() => {
        res.status(200).json({ id: `AU-${orderNumber}` })
    }, 1000)
}