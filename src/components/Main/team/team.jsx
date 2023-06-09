import styles from './team.module.scss'

const Team = () => {
    return ( 
        <section className={styles.team}>
            <div>
                <h1 className={styles.team_title}>
                    Core team
                </h1>
                <ul className={styles.team_list}>
                    <li className={styles.team_card}>
                        <div className={styles.team_card_fill}>
                            <h2 className={styles.team_card_name}>ALEX</h2>
                            <p className={styles.team_card_text}>WEB DEVELOPER</p>
                        </div>
                    </li>
                    <li className={styles.team_card}>
                        <div className={styles.team_card_fill}>
                            <h2 className={styles.team_card_name}>KYRYLO</h2>
                            <p className={styles.team_card_text}>STRATEGY</p>
                            <p className={styles.team_card_text}>CREATIVE DIRECTION</p>
                        </div>
                    </li>
                    <li className={styles.team_card}>
                        <div className={styles.team_card_fill}>
                            <h2 className={styles.team_card_name}>DIMITRIE</h2>
                            <p className={styles.team_card_text}>PRODUCTION</p>
                            <p className={styles.team_card_text}>3D DESIGN</p>
                        </div>
                    </li>
                    <li className={styles.team_card}>
                        <div className={styles.team_card_fill}>
                            <h2 className={styles.team_card_name}>PERCIK</h2>
                            <p className={styles.team_card_text}>DESIGN</p>
                            <p className={styles.team_card_text}>ART DIRECTION</p>
                        </div>
                    </li>
                    <li className={styles.team_card}> 
                        <div className={styles.team_card_fill}>
                            <h2 className={styles.team_card_name}>OREST</h2>
                            <p className={styles.team_card_text}>PR</p>
                            <p className={styles.team_card_text}>COMMUNICATION</p>
                        </div>
                    </li>
                    <li className={styles.team_card}>
                        <div className={styles.team_card_fill}>
                            <h2 className={styles.team_card_name}>DANIEL</h2>
                            <p className={styles.team_card_text}>PROJECT MANAGER</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        )
    }
    
    export default Team