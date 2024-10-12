import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import emailjs from '@emailjs/browser';
import { Button } from "@nextui-org/react";
import { useTheme } from 'next-themes'; // Import useTheme to manage dark/light mode

const ContactUs = () => {
  const form = useRef();
  const { theme } = useTheme(); // Get the current theme (dark or light)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2thif8w', 
        'template_v4kveiw', 
        form.current, 
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log('SUCCESS!');
          window.location.reload(); // Refresh page after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="p-14">
      <Card className={`py-4 max-w-4xl mx-auto shadow-lg rounded-lg hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300 border-2 ${theme === "dark" ? "border-gray-700" : "border-gray-300"}`}>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h2 className="text-2xl font-bold">Customer Support</h2>
          <small className="text-default-500">We’re here to help!</small>
          <h2 className="font-bold text-medium">Contact Us</h2>
        </CardHeader>
        
        <CardBody className="overflow-visible py-2">
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="block text-sm font-medium">Name</label>
                <input 
                  className="mt-1 p-3 border border-gray-300 rounded-md w-full" 
                  type="text" 
                  name="user_name" 
                  required 
                />
              </div>

              <div className="flex flex-col">
                <label className="block text-sm font-medium">Email</label>
                <input 
                  className="mt-1 p-3 border border-gray-300 rounded-md w-full" 
                  type="email" 
                  name="user_email" 
                  required 
                />
              </div>

              <div className="col-span-2 flex flex-col">
                <label className="block text-sm font-medium">Message</label>
                <textarea 
                  className="mt-1 p-3 border border-gray-300 rounded-md w-full" 
                  name="message" 
                  required 
                />
              </div>
            </div>

            <div className="mt-4">
              <Button type="submit" color="primary">
                Send
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

const CustomerMainSection = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 4 }}>
      <ContactUs />
    </Box>
  );
};

export default CustomerMainSection;
