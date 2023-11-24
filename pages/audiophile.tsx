import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import DisplayMac from '../components/DisplayMac'
import EffectOpacity from '../components/EffectOpacity'
import Fade from 'react-reveal/Fade'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const AudioPhile = () => {
  return (
    <div className="text-gray-400  max-w-[1200px] my-0 mx-auto ">
      <EffectOpacity>
        <div className="flex space-x-6 justify-between items-center h-[75vh]">
          <h2 className="text-white text-8xl">Audiophile</h2>
          <div>
            <div className="flex items-center mb-5">
              <span className="text-sm btn inline-block">Projet Personnel</span>

              <div className="flex space-x-3">
                <span>React</span>
                <span>React-Router</span>
                <span>Redux</span>
                <span>Sass</span>
              </div>
            </div>
            <p className="font-aeonikLight text-[36px] w-[590px] leading-relaxed">
              Le défi consistait à créer ce site web e-commerce de plusieurs
              pages et à le rendre aussi propre de la conception ✍️
            </p>
          </div>
        </div>
      </EffectOpacity>
      <DisplayMac />

      <div className="flex justify-between items-center">
        <Fade left duration={2500}>
          <div className="w-[700px]">
            <ul className="font-aeonikLight text-xl pt-[4rem] leading-relaxed">
              <li>
                View the optimal layout for the app depending on their devices
                screen size.
              </li>
              <li>
                See hover states for all interactive elements on the page.
              </li>
              <li>Add/Remove products from the cart.</li>
              <li>Edit product quantities in the cart.</li>
              <li>Fill in all fields in the checkout.</li>
              <li>
                Receive form validations if fields are missed or incorrect
                during checkout.
              </li>
              <li>
                See correct checkout totals depending on the products in the
                cart.
              </li>
              <li>Shipping always adds $50 to the order.</li>
              <li>
                VAT is calculated as 20% of the product total, excluding
                shipping.
              </li>
              <li>
                See an order confirmation modal after checking out with an order
                summary.
              </li>
            </ul>
          </div>
        </Fade>
        <Fade right duration={2500}>
          <Image
            src="/mockup.png"
            alt="mock"
            objectFit="contain"
            width={500}
            height={500}
          />
        </Fade>
      </div>

      {/* LInk here */}
    </div>
  )
}

export default AudioPhile
