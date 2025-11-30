import Accordion from "../components/Accordion";
import { drugInfoList } from "../../data/drugs";
import { statistics } from "../../data/statistics";
import { warningSignsList } from "../../data/warningSigns";
import { recoverySteps } from "../../data/recoveryStepsTimeline";
import { mythsAndFacts } from "../../data/mythsAndFacts";
import StatsGrid from "../components/StatsGrid";
import { helpResources } from "../../data/helpResource";
import HelpSection from "../components/HelpSection";
import MythsFactsSection from "../components/MythsFactSection";
import RecoveryTimeline from "../components/RecoveryTimeline";
import WarningSignsCard from "../components/WarningSIdesCard";

const Home = () => {
    return (
        <div className="container">
            {/* Hero Section */}
            <section className="hero-section">
                <h1>Образовательный портал о вреде психоактивных веществ</h1>
                <p className="hero-subtitle">
                    Информация для повышения осведомлённости и профилактики
                </p>
            </section>

            {/* Statistics */}
            <section className="stats-section">
                <h2>Важные факты</h2>
                <StatsGrid items={statistics} />
            </section>

            {/* Original Drug Information */}
            <section className="info-section">
                <h2>Информация о веществах</h2>
                <p>
                    Ниже представлена образовательная информация о разных типах веществ и их
                    вреде. Цель — повышение осведомлённости и поддержка трезвого образа
                    жизни.
                </p>
                <Accordion items={drugInfoList} />
            </section>

            {/* Warning Signs */}
            <section className="warning-section">
                <h2>Признаки употребления</h2>
                <p className="section-subtitle">На что важно обратить внимание</p>
                <div className="warning-grid">
                    {warningSignsList.map(category => (
                        <WarningSignsCard key={category.id} data={category} />
                    ))}
                </div>
            </section>

            {/* Recovery Timeline */}
            <section className="recovery-section">
                <h2>Путь к восстановлению</h2>
                <p className="section-subtitle">Основные этапы выздоровления</p>
                <RecoveryTimeline steps={recoverySteps} />
            </section>

            {/* Myths and Facts */}
            <section className="myths-section">
                <h2>Мифы и реальность</h2>
                <p className="section-subtitle">Развеиваем распространённые заблуждения</p>
                <MythsFactsSection items={mythsAndFacts} />
            </section>

            {/* Help Resources */}
            <section className="help-section">
                <h2>Где получить помощь</h2>
                <p className="section-subtitle">Профессиональная поддержка доступна каждому</p>
                <HelpSection resources={helpResources} />
            </section>

            {/* Call to Action */}
            <section className="cta-section">
                <div className="cta-content">
                    <h2>Нужна помощь?</h2>
                    <p>Не оставайтесь наедине с проблемой. Поддержка доступна прямо сейчас.</p>
                    <div className="cta-buttons">
                        <button className="btn-primary">Получить консультацию</button>
                        <button className="btn-secondary">Заполнить дневник</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
