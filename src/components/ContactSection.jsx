import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Facebook,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";

// IMPORTANT: Replace these with your actual values from EmailJS dashboard
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const initializeEmailJS = () => {
    emailjs.init({
      publicKey: EMAILJS_PUBLIC_KEY,
      blockHeadless: false,
    });
  };

  const resetForm = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: e.target.name.value,
      time: Date().toLocaleUpperCase(),
      message: e.target.message.value,
      title: "Message from Portfolio - URGENT!!!!",
      email: e.target.email.value, 
    };

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      if (result.status === 200) {
        alert("Message sent successfully! 🎉");
        resetForm();
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert(
        "Failed to send message. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-xl">
          Like what you see? <br /> Here's where to find me
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>
            <div className="space-y-6 justify-center">
              {/* item 1 */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:ogagaogheneakpowenre@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ogagaogheneakpowenre@gmail.com
                  </a>
                </div>
              </div>

              {/* item 2 */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+234 7081512610"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +234 7081512610
                  </a>
                </div>
              </div>

              {/* item 3 */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Lagos, Nigeria
                  </a>
                </div>
              </div>
              {/*  */}

              <div className="pt-8">
                <h4 className="font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-4 justify-center">
                  <a href="www.linkedin.com/in/ogagaoghene-daniel-akpowenre-749826303">
                    <Linkedin />
                  </a>
                  <a href="https://profile.indeed.com/p/ogagaoghenea-w2hs2yl">
                    <img className="w-10" src="https://www.pngall.com/wp-content/uploads/15/Indeed-Logo-PNG-Photo.png" alt="" />
                  </a>
                  {/* <a href="#">
                    <Facebook />
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
            <form
              ref={formRef}
              className="space-y-6"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-sm block font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 rounded-md py-3 border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>
              {/* email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm block font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 rounded-md py-3 border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="johndoe@mail.com"
                />
              </div>
              {/* message */}
              <div>
                <label
                  htmlFor="message"
                  className="text-sm block font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 rounded-md py-3 border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Hi, I'd like to talk about..."
                />
              </div>
              {/* Submit */}
              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;