import React from 'react';

const Pricing = () => {
  return (
    <section className='bg-[#1e293b] px-10 py-12 rounded-lg text-white shadow-md border border-[#334155]'>
      <h1
        className='text-[#a5b4fc] font-bold
       text-2xl'
      >
        API Pricing
      </h1>
      <p className=''>
        Our API pricing is based on the model used and the number of tokens processed. Here's a
        breakdown of the costs:
      </p>

      <table className=' border overflow-hidden rounded-lg border-separate border-spacing-0 border-[#334155]  w-full my-4'>
        <thead className='bg-[#6366f1] text-left p-10 '>
          <tr>
            <th className='p-4'>API</th>
            <th>Model</th>
            <th>PRICE PER 1K TOKENS</th>
          </tr>
        </thead>
        <tbody className=''>
          <tr className='border-b '>
            <td className='tdata pl-2'>OpenAI</td>
            <td className='tdata'>GPT-3.5</td>
            <td className='tdata'>$0.002</td>
          </tr>
          <tr className='border-b border-blue-400/20 '>
            <td className='tdata pl-2'>OpenAI</td>
            <td className='tdata'>GPT-4</td>
            <td className='tdata'>$0.03</td>
          </tr>
          <tr className='border-b border-blue-400/20 '>
            <td className='tdata pl-2'>Together AI</td>
            <td className='tdata'>Llama-2-70b</td>
            <td className='tdata'>$0.0008</td>
          </tr>
          <tr className='border-b border-blue-400/20 '>
            <td className='tdata pl-2'>Together AI</td>
            <td className='tdata'>Llama-2-13b</td>
            <td className='tdata'>$0.0006</td>
          </tr>
        </tbody>
      </table>
      <div className='my-8'>
        <h1
          className='text-[#a5b4fc] font-bold
       text-2xl'
        >
          Token Estimation
        </h1>
        <p>
          On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we
          recommend using our token calculator tool.
        </p>
      </div>
      <div className='my-4'>
        <h1
          className='text-[#a5b4fc] font-bold
       text-2xl'
        >
          Biling
        </h1>
        <p>
          You will only be charged for the tokens used in generating the book. The API tracks token
          usage and bills accordingly. Detailed usage reports are available in your account
          dashboard.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
