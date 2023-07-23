import { contactInfo } from "@/public/data";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="h-screen bg-zinc-900 text-white">
      <Link className="text-right block p-10 text-2xl mb-10" href={"/"}>
        <b>X</b>
      </Link>
      <div className="grid grid-cols-2 justify-items-center">
        <section className="w-[75%]">
          <h2 className="text-4xl mb-10">Just leave a message (I do answer)</h2>
          <form action="" className="flex flex-col gap-5 items-center">
            <input
              type="text"
              placeholder="Name"
              className="w-[100%] h-10 border-b-2 bg-transparent"
            />
            <input
              type="text"
              placeholder="Phone / Email"
              className="w-[100%] h-10 border-b-2 bg-transparent"
            />
            <textarea
              rows={5}
              placeholder="Your message..."
              className="w-[100%] border-b-2 bg-transparent mb-6"
            />
            <button type="submit" className="w-[60%] border-2 p-3 text-xl">
              Submit
            </button>
          </form>
        </section>
        <section className="w-[75%]">
          <h2 className="text-4xl mb-10">Wanna know more???</h2>
          <div className="flex flex-col gap-3">
            {contactInfo.map((contact, index) => {
              return (
                <p key={index} className="flex gap-3">
                  {contact.symbol}
                  <a href={contact.link}>{contact.title}</a>
                </p>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
