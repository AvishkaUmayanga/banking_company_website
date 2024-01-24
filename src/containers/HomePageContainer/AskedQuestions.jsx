import React from 'react'
import AskedBox from '../../components/HomeComponents/AskedBox'

export default function AskedQuestions() {
  return (
    <div className='flex flex-col gap-8 text-white '>
      <div className=' max-sm:text-center'>
        <h1 className='pb-2 text-3xl max-md:text-2xl max-lg:text-center text-mainYellow'>Frequently <span className='text-white '>Asked Questions</span></h1>
        <p>Still you have any questions? Contact our Team via support@yourbank.com</p>
      </div>
      <div className='grid w-full grid-cols-2 grid-rows-2 gap-7 max-sm:grid-cols-1'>
        <AskedBox title='How do I open an account with YourBank?' description='Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.'/>
        <AskedBox title='What documents do I need to provide to apply for a loan?' description={`The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.`}/>
        <AskedBox title='How can I access my accounts online?' description={`Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.`}/>
        <AskedBox title='Are my transactions and personal information secure?' description={`At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.`}/>
      </div>
      <div className='flex justify-center'>
        <button className='px-3 py-1 duration-300 rounded-full max-md:mb-5 hover:scale-110 bg-lighterGray hover:text-mainYellow'>Load All FAQs</button>
      </div>
    </div>
  )
}
