import styles from '@/styles/Projects.module.scss';

import Link from 'next/link';
import Head from 'next/head';

import { GithubOutlined, EyeOutlined, DeleteOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Button, Card, Typography } from 'antd';

const { Title } = Typography;

const { Meta } = Card;

const Projects = () => {
    return (
        <>
            <Head>
                <meta content="Cris-aian Vergara Portfolio Website" name="description"></meta>
                <meta content="Cris-aian Vergara" name="author"></meta>
                <meta content="portfolio website" name="keywords"></meta>
                <title>Cris-aian Vergara | Projects</title>
            </Head>
            <div className={styles.projects}>
                <Card className={styles.card}
                    style={{ width: 350 }}
                    cover={
                        <img
                            alt="example"
                            src="/images/zia.png"
                        />
                    }
                    actions={[
                        <><Link href="https://www.zia-apps.com/" target='_blank'><EyeOutlined key="zia-url" /></Link></>,
                        <><Link href="#"><CloseCircleOutlined key="zia-github" /></Link></>,
                        // <><Button type="link"><DeleteOutlined key="setting" /></Button></>,
                    ]}
                    bodyStyle={{ fontSize: '1rem' }}
                >
                    <Meta
                        title={<Title level={4}>Zia-Apps</Title>}
                        description="This web app is designed for financial purposes and has been developed using the Django, Next.js, and Ant Design."
                    />
                </Card>
                <Card className={styles.card}
                    style={{ width: 350 }}
                    cover={
                        <img
                            alt="example"
                            src="/images/kriskap.png"
                        />
                    }
                    actions={[
                        <><Link href="https://kriskap.onrender.com/" target='_blank'><EyeOutlined key="kriskap-url" /></Link></>,
                        <><Link href="https://github.com/crisaianvergara/kriskap" target='_blank' ><GithubOutlined key="kriskap-github" /></Link></>,
                        // <><Button type="link"><DeleteOutlined key="setting" /></Button></>,
                    ]}
                    bodyStyle={{ fontSize: '1rem' }}
                >
                    <Meta
                        title={<Title level={4}>Kriskap</Title>}
                        description="This project showcases my technical abilities and demonstrates my understanding of full-stack development."
                    />
                </Card>
                <Card
                    className={styles.card}
                    style={{ width: 350 }}
                    cover={
                        <img
                            alt="example"
                            src="/images/sulat.png"
                        />
                    }
                    actions={[
                        <><Link href="https://sulat-aian.onrender.com/" target='_blank' ><EyeOutlined key="sulat-url" /></Link></>,
                        <><Link href="https://github.com/crisaianvergara/sulat-aian" target='_blank' ><GithubOutlined key="sulat-github" /></Link></>,
                        // <><Button type="link"><DeleteOutlined key="setting" /></Button></>,
                    ]}
                    bodyStyle={{ fontSize: '1rem' }}
                >
                    <Meta
                        title={<Title level={4}>Sulat-Aian</Title>}
                        description="This is a tech blog web application built using the Flask framework in Python and CSS Bootstrap 5."
                    />
                </Card>
            </div>
        </>
    )
}

export default Projects
