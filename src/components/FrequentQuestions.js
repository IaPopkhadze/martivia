import React, { useEffect, useState } from "react";
import { FaPersonCircleQuestion } from "react-icons/fa6";

const FrequentQuestions = () => {
  const [questionAnswer, setQuestionAnswer] = useState([
    {
      question: "სად ვიხდი ავტომობილის  შეძენის ღირებულებას და ვის სახელზე მოდის ავტომობილი",
      answer: "ავტომობილის შეძენის შემდგომ 2 დღის განმავლობაში ბანკის მეშვეობით ურიცხავთ თანხას იმ აუქციონის რომელზეც შევიძინეთ ავტომობილი  (Copart, Manheim, IAA, Pipeline, Adesa დ.ა.შ), ევროპაში შეძენის შემთხვევაში ავტოსალონს ან ფიზიკურ პირს, სპეც-ტექნიკის შეძენის შემთვევაში თანხას ურიცხავთ სპეც-ტექნიკის მწარმოებელს(ქარხანა). ავტომობილი მოდის თქვენს მიერ მითითებული ფიზიკური ან იურიდიული პირის სახელზე",
    },
    {
      question: "როდის ვიხდი ავტომობილის შეძენის ,ტრანსპორტირების და გაკეთების საფასურს?",
      answer: "ავტომობილის საფასურს იხდით ავტომობილის შეძენიდან 2 დღეში, ავტომობილის ტრანსპორტირებას კი ავტომობილის პორტში შემოსვლის დროს. ხოლო ავტომობილის გაკეთების საფასურს გადახდა ხდება ავტომობილის თბილისში ჩამოსვლის დროს",
    },    {
      question: "მეცოდინება თუ არა ავტომობილის მდგომარეობა ისტორია და ვიზუალი შეძენამდე",
      answer: "ყველა მომხმარებელს ეყოლება ინდივიდუალური კონსულტანტი რომელიც ავტომობილის შეძენამდე მიაწვიდ მას დეტალურ ინფომრაციას ავტომობილის მდგომარეობის და ისტირიის შესახებ(იყო თუა რა მანამდე დაზიანებული, რამდენად ხშირად უტარდებოდა ტექ-დათვარიელება დ.ა.შ) ,მხოლოს თქვენთან შეთანხმების შემდგომ იქნება შეძენილი ავტომობილი და სურვილისამებრ შეგიძლიათ დაესწროთ ავტომობილის შეძენის პროცეს",
    },
    {
      question: "მეცოდინება თუ არა სად იმყოფება ავტომობილი გადაზიდვის პროცესში? და დაზღვეულია თუ არა  ავტომობილისი ტრანსპორტირება?",
      answer: "ავტომობილის შეძენის შემდგომ თქვენ გექნებათ სრული ინფორმაცია თქვენი ავტომობილის მდებარეობის შესახებ რომელსაც შეგიძლიათ დაააკვირდეთ ონლაინ რეჟიმში. რა საკვირველია, ავტომობილის  ტრანსპორტირება დაზღვეულია",
    },
    {
      question: "რა დრო ჭირდება ავტომობილის ჩამოსვლას და შემდგომ მის შეკეთებას?",
      answer: "ავტომობილის ჩამოსვლის დრო დამოკიდებულია მის მდებარეობაზე. მაგალითად: ამერიკიდან(60 -75 დღემდე, კორეიდან 60 -75 დღემდე, კანადიდან 60-75 დღემდე, ევროპიდან 15-30 დღემდე, სპეც-ტექნიკა 15-30 დღემდე. რაც შეეხება შეკეთებას, ავტომობილის შეკეთება ხება მისი ჩამოსვლიდან 25-20 დღის ვადაში",
    },

    {
      question: "მექნება თუ არა დამატებით ფოტოების ავტომობილის შეძენის შემდგომ და რა მდგომარეობაში ჩაგვაბარებთ ავტომობილს? ",
      answer: "რა საკვირველია  ჩვენთან ყველა გადაზიდვის ეტაპი არის დასურათებული: როდესაც ჩვენი მძღოლი მივა ავტომობილის წამოსაყვანთ 2.პორტში მიღების დროს ავტომობილის ჩატვირთვის დროს საქართველოს პორტში ავტომობილის  გახსნის დროს. ავტომობილს ჩაგაბარებთ იდეალურ მოდგომარეობაში ",
    }
  ]);

  useEffect(() => {
    const answerContainers = document.querySelectorAll(".answer");

    function handleScroll() {
      const triggerBottom = window.innerHeight * 0.9;
      const triggerBottom2 = window.innerHeight * 1.1;
      answerContainers.forEach((container) => {
        const containerTop = container.getBoundingClientRect().top;
        if (containerTop < triggerBottom) {
          container.classList.add("show");
        }
        if (containerTop > triggerBottom2) {
          container.classList.remove("show");
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Frequent_questions">
      <p className="frequent_question_title">ხშირად დასმული კითხვები...</p>

      {questionAnswer.map((element, index) => {
        return (
          <div className="each_question_container">
            <div className="each_question_container-content">
              <div className="question">
                <FaPersonCircleQuestion style={{ fontSize: "3rem" }} />
                {element.question}
              </div>
              <div className="answer">{element.answer}</div>
            </div>
          </div>
        );
      })}


    </div>
  );
};

export default FrequentQuestions;
