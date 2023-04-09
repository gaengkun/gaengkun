import Image from 'next/image'
import { Inter } from 'next/font/google'

import styles from './css/roulette.module.css'

export default function Roulette() {
  return (
    <>
      <div className={`${styles.wrap} flex-col`}>
        <h2 className="text-5xl font-semibold text-center py-20">Roulette</h2>
        <div className="flex items-start justify-between">
          <div className="flex justify-center items-center w-full">
            <div
              className={`${styles.rouletteBox} relative flex items-center justify-center roulette-box-min rouletterp-20 rounded-full min-w-300 min-h-300 bg-cyan-600`}
            >
              <ul className={`${styles.menu}`}>
                <li className={`${styles.one}`}>1</li>
                <li className={`${styles.two}`}>2</li>
                <li className={`${styles.three}`}>3</li>
                <li className={`${styles.four}`}>4</li>
                <li className={`${styles.five}`}>5</li>
                <li className={`${styles.six}`}>6</li>
              </ul>

              <button className="absolute z-10 flex items-center justify-center w-20 h-20 font-semibold bg-slate-400 rounded-full ">
                Start
              </button>
            </div>
          </div>
          <div className="w-full">유아이</div>
        </div>
      </div>
    </>
  )
}
