import { NextApiRequest, NextApiResponse } from 'next';
 
export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, nome: 'User 1' },
        { id: 2, nome: 'User 2' },
        { id: 3, nome: 'User 3' }
    ];

    return response.json(users)
}