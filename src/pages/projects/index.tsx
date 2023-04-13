import styles from '@/styles/Projects.module.scss';

import Link from 'next/link';

import { GithubOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Card, Typography } from 'antd';

const { Title } = Typography;

const { Meta } = Card;

const Projects = () => {
    return (
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
                    <><Link href="/" target='_blank'><GithubOutlined key="zia-github" /></Link></>,
                    // <><Button type="link"><DeleteOutlined key="setting" /></Button></>,
                ]}
                hoverable
                bodyStyle={{ fontSize: '1rem' }}
            >
                <Meta
                    title={<Title level={4}>Zia-App</Title>}
                    description="This is a financial website built using the Django and NextJs framework."
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
                hoverable
                bodyStyle={{ fontSize: '1rem' }}
            >
                <Meta
                    title={<Title level={4}>Kriskap</Title>}
                    description="This is an e-commerce website built using the Flask framework in Python."
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
                    <><Link href="/" target='_blank' ><EyeOutlined key="sulat-url" /></Link></>,
                    <><Link href="https://github.com/crisaianvergara/sulat-aian" target='_blank' ><GithubOutlined key="sulat-github" /></Link></>,
                    // <><Button type="link"><DeleteOutlined key="setting" /></Button></>,
                ]}
                hoverable
                bodyStyle={{ fontSize: '1rem' }}
            >
                <Meta
                    title={<Title level={4}>Sulat-Aian</Title>}
                    description="This is a tech blog website built using the Flask framework in Python."
                />
            </Card>
        </div>

    )

}

export default Projects
