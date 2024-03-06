import express from "express"
import { genPassword, createUser, getUserByName } from "../helper.js"
const router = express.Router()

//register
router.post('/register', async (req, res) => {
    const { username, password } = req.body
    console.log(username, password)
    const isUserExist = await getUserByName(username)
    console.log(isUserExist)
    // const hashedPassword = await genPassword(password)
    // console.log(hashedPassword)
    // const result = await createUser(username, hashedPassword)
    res.send(isUserExist);
});


export const usersRoute = router