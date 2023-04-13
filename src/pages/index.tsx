import styles from '@/styles/Home.module.scss'

import Typewriter from 'typewriter-effect';

export default function Home() {
    return (
        <div className={styles.home}>
            <h1>Hello, I am Cris-aian.</h1>
            <h3>
                <Typewriter
                    options={{
                        strings: ['Software Engineer!', 'Day Trader!', 'Farmer!', 'Woodworker!'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h3>
        </div>
    )
}
