import Head from 'next/head'

export default function Home() {
  return (
    <>
      <div className='bg-green-50' >
        <Head>
          <title> Cookie Stand Admin </title>
        </Head>


        <header className='py-6 bg-emerald-500 justify-self-center' >
          <h1 className='pl-5 text-4xl font-bold' >Cookie Stand Admin</h1>
        </header>

        <main className="flex flex-col items-center flex-1 w-full m-10 text-center">
          <form className='w-3/4 p-4 rounded-lg bg-emerald-300' >
            <h2 className='text-2xl font-semibold align-middle'>Create a cookie stand</h2>
            
                <label className='' >Location</label>
                <input name='question' className='flex-auto w-11/12 m-3 ronded-sm ' />
              
            <div class="flex w-full">


              <div className='flex flex-col w-3/12 p-4' >
                <label className='' >Minimum Customers Per Hour</label>
                <input type="number" name='minimum' className='m-3 rounded-sm' />
              </div>
              <div className='flex flex-col w-3/12 p-4 '>
                <label className='' >Maximum Customers Per Hour</label>
                <input type="number" name='question' className='m-3 rounded-sm' />
              </div>
              <div className='flex flex-col w-3/12 p-4'>
                <label className='' >Avarage Customers Per Hour</label>
                <input type="number" name='question' className='m-3 rounded-sm' />
              </div >
              <button className='mt-6 text-xl bg-emerald-500 w-60 h-14'> Create </button>
            </div>
          </form>
        </main>

        <footer className="flex w-full h-24 px-10 border-t justify-left bg-emerald-500 ">

          Powered by{' '}

        </footer>
      </div>
    </>
  )
}
