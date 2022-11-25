import { EventEmitter } from "events";


export const mailer = new EventEmitter()
const MailerMethods = [
    {
        name: "New User Added",
        func: (user, template = null) => sendEmail(user, template),
    },
    {
        name: "manager summary",
        func: (data) => sendEmail(data, "managerSummary"),
    }
]


//adding Mailer methods to the event
MailerMethods.forEach(({ name, func }) => mailer.on(`${name}`, func));