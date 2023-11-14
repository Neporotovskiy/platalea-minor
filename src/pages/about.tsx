import React from "react";

import { Navigation } from "features/navigation";
import { Discord } from "features/discord";

import { Image } from "components/image";
import { Text } from "components/text";

import styles from "./about.module.css";

export const About = () => {
    React.useEffect(() => {
        document.title = "О проекте";
    });

    return (
        <>
            <Navigation />
            <article className={styles.about}>
                <header className={styles.header}>
                    <div className={styles.content}>
                        <Text as="h1" color="light" size="large">
                            Мы - игровое сообщество
                            <br />
                            «Ghost Special Force»
                        </Text>
                        <Text as="h2" color="light" size="small">
                            Фанаты хардкорных тактических шутеров от первого
                            лица.
                        </Text>
                    </div>
                    <Image
                        src="/about-us.jpg"
                        width="1070"
                        height="602"
                        className={styles.cover}
                    />
                </header>
                <section className={styles.content}>
                    <Text as="p" color="light" size="medium">
                        Цель нашего сообщества – объединить людей со схожими
                        игровыми предпочтениями и стилем игры, и дать им
                        возможность играть в дружественной атмосфере и получать
                        удовольствие от совместного прохождения сложных игровых
                        заданий. Мы рады всем, кто ценит вдумчивый геймплей и
                        стремится играть в команде.
                    </Text>
                </section>
                <section className={styles.content}>
                    <Text as="h2" color="light" size="medium">
                        Регулярные игры
                    </Text>
                    <Text as="p" color="light" size="small">
                        Мы регулярно проводим совместные PVE и PVP игры, чтобы
                        улучшить навыки каждого участника и научиться играть в
                        команде. Мы всегда стремимся к победе и получению
                        незабываемых эмоций от игрового процесса.
                    </Text>
                    <Text as="h2" color="light" size="medium">
                        Соревновательные игры
                    </Text>
                    <Text as="p" color="light" size="small">
                        Мы также регулярно организуем и принимаем участие в
                        различных соревнованиях, как внутренних, так и
                        международных.
                    </Text>
                    <Text as="h2" color="light" size="medium">
                        Игровой контент
                    </Text>
                    <Text as="p" color="light" size="small">
                        Мы ведем свой блог и всегда рады новым авторам -
                        создавайте контент по вашим любимым видеоиграм, делитесь
                        опытом, раскрывайте секреты прохождения сложных заданий,
                        знакомьте с новинками жанра и держите в курсе новостей
                        игровой индустрии.
                    </Text>
                    <Text as="h2" color="light" size="medium">
                        Безопасность
                    </Text>
                    <Text as="p" color="light" size="small">
                        Мы строго следим за соблюдением норм поведения в
                        сообществе и стремимся поддерживать дружескую атмосферу.
                        Вы будете чувствовать себя комфортно.
                    </Text>
                    <Text as="h2" color="light" size="medium">
                        Структура
                    </Text>
                    <Text as="p" color="light" size="small">
                        В нашем сообществе действует парамилитарная структура,
                        которая способствует повышению уровня организации и
                        дисциплины, а также позволяет получить более аутентичные
                        впечатления от игрового процесса.
                    </Text>
                </section>
                <Discord />
            </article>
        </>
    );
};
