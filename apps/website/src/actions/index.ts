import { ActionError, defineAction } from "astro:actions";
import { Resend } from "resend";

const resend = new Resend("re_XJBCJnrP_GX9ASNBvPGefH6NY1Gxst3sv");

export const server = {
  send: defineAction({
    accept: "form",
    handler: async (form) => {
      const name = form.get("name");
      const email = form.get("email");
      const message = form.get("message");

      console.log(name, email, message);

      const { data, error } = await resend.emails.send({
        from: "noreply@globalsquareit.com",
        to: [
          "nabings1010@gmail.com",
          "gs.developer01@gmail.com",
          "shahithakurisundar@gmail.com",
        ],
        subject: `Inquiry from ${name}(${email})`,
        html: ` <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>`,
      });

      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message,
        });
      }

      return data;
    },
  }),
};
