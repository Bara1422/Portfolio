import React from 'react'
import GitHub from '../icons/GitHub'
import ExternalLink from '../icons/ExternalLink'

const Projects = () => {
  return (
    <section className='flex flex-col gap-4 mt-24 p-0' id='projects'>
      <h2
        className='text-eden-400 text-4xl font-bold text-center'
        id='projects-anchor'
      >
        PORTFOLIO
      </h2>
      <div className='h-auto p-2 flex gap-4 '>
        <div className=' bg-white border  border-gray-200 rounded-lg p-3  lg:h-[27rem] h-[40rem] mx-auto flex  lg:flex-row flex-col w-full lg:gap-7 gap-3 dark:bg-gray-800 dark:border-gray-700 '>
          <div className=' lg:h-96 sm:h-[340px] h-[200px] lg:w-3/5 overflow-hidden border-slate-700 rounded-md border lg:my-auto shadow-md'>
            <a href='#home'>
              <img
                src='/freectionaryImg.png'
                alt=''
                className=' transition-all ease-in-out duration-[6000ms] sm:object-cover w-full object-top lg:hover:object-bottom object-cover max-h-full'
              />
            </a>
          </div>
          <div className='flex flex-col gap-6 max-w-[400px] p-3 items-center mx-auto my-auto  '>
            <h3 className='text-center text-3xl  font-bold'>Freectionary</h3>
            <p className='text-lg lg:min-h-[200px] max-h-36 overflow-auto'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              dolor, minima sed vel recusandae ipsum cumque voluptates. Dolorem
              ullam excepturi totam recusandae. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Voluptatum architecto sint
              voluptates quam culpa voluptate magni error, doloribus accusantium
              natus, molestias modi earum reprehenderit quasi vitae odit ipsum
              eum officiis quod iure ex maiores soluta harum doloremque. Quos
              voluptatum aliquid corporis, aliquam recusandae aut eum cumque ad
              dolores consectetur earum cum blanditiis consequuntur commodi
              atque deserunt. Laboriosam nam omnis quam doloribus rem culpa amet
              quaerat incidunt. Totam delectus illo blanditiis reprehenderit!
              Ullam sapiente eos aspernatur beatae. Cumque ratione dolores magni
              vitae nam fuga quia in cum quasi! Labore sunt ducimus vel deserunt
              optio facere id quae sed est asperiores hic dolorum accusantium
              nesciunt nam, quam sint quis. Doloribus praesentium blanditiis
              optio facilis ea quidem officiis quia minima rem dicta illo quo
              accusantium sed inventore nisi laudantium, nam perferendis ad
              sint, cumque nihil quod sequi nesciunt! Omnis illo reprehenderit
              deserunt nobis earum. Rerum sunt ipsum tempora pariatur asperiores
              ipsam eos, impedit quidem sequi error incidunt eveniet alias
              culpa, aspernatur tempore ad, assumenda quam non repudiandae? Vel
              suscipit, temporibus sequi non natus assumenda deleniti laudantium
              quod consequuntur soluta voluptates? Fugiat officiis quam
              dignissimos. Voluptates hic, ipsam dolore placeat possimus animi
              enim vel unde dolorem eos? Voluptate ipsum illo quibusdam sed.
              Quae, ea.
            </p>
            <div className='flex gap-3 text-xl font-semibold  '>
              <span className='p-1 px-2 bg-gray-700 rounded-md shadow-md hover:text-eden-500 cursor-default'>
                React
              </span>
              <span className='p-1 px-2 bg-gray-700 rounded-md shadow-md hover:text-eden-500 cursor-default'>
                Tailwind
              </span>
            </div>
            <div className='flex md:gap-7 gap-3 w-full justify-evenly '>
              <a
                href=''
                className='flex text-xl items-end gap-2 hover:text-eden-500'
              >
                <span>Code</span> <GitHub />
              </a>
              <a
                href=''
                className='flex text-xl items-end gap-2 hover:text-eden-500'
              >
                <span>Demo</span> <ExternalLink />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
