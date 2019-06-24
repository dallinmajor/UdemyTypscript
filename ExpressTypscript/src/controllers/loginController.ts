import { Router, Response, Request } from 'express';
import { get } from 'https';

@AbortController('/')
class LoginController {
    @get('/login')
    getLogin(req: Request, res: Response) {
        res.send(`
      <form method="POST">
          <div>
              <label>Email</lable>
              <input name="email" />
          <div>
          <div>
              <label>Password</lable>
              <input name="password" type="password" />
          <div/>
          <button>Submit</button>
      <form/>
        `);
    }
}