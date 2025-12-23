"use client";

export default function GoogleMap() {
  return (
    <div className="w-full my-8">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d786.2989706704238!2d51.45758038264447!3d35.7666059536351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e050065a6d6c5%3A0xa71f9ed07000e30a!2z2b7Yp9iz2K_Yp9ix2KfZhiDYqNmI2LPYqtin2YYg2YfZgdiq2YUg2b7ZhNin2qkgMTQx!5e0!3m2!1sen!2s!4v1755348368612!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
