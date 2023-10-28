import React from "react";
import Faq from "react-faq-component";
import './faquestions.css'

const data = {
    // title: "FAQ (How it works)",
    rows: [
        {
            title: "What is the definition of a small loan?",
            content: `A small amount personal loan is a type of loan of up to ₹5 lakhs that has to be repaid in a short period. The loan term could be a year or more, but not more than 5 years.`,
        },
        {
            title: "What distinguishes small loans from other types of loans?",
            content:"Small loans online are quick and could come in handy at the end of the month in case you run out of your salary. Other types of loans can take time to get disbursed. A small business loan is generally taken to finance short-term money requirements.",
        },
        {
            title: "What is the least loan that I am eligible for?",
            content: `The least amount of loan that you can borrow from PaySense is ₹5,000. `,
        },
        {
            title: "Are there any hidden fees?",
            content: `No. There are no hidden fees and charges involved when you take a personal loan from PaySense. All the fees and charges like interest rates, loan processing fees, late payment charges and foreclosure charges are mentioned in the loan agreement.`,
        },
        {
            title: "How much processing fees do you charge?",
            content: `We charge a processing fees of up to 2.5% of the loan amount. The standard GST is also applicable over the processing fees.`,
        },
        {
            title: "I have zero credit score. Will you give me a RightRate personal loan?",
            content: `Yes. Most of the banks and NBFCs require a credit score of 750+ to approve your loan. However, we understand that everybody begins somewhere. And we would love to be that 'somewhere' where you begin building a good credit.`,
        },
    ],
};

const styles = {
    titleTextColor: "blue",
    rowTitleColor: "black",
    rowContentColor: "var(--color-grey)",
    arrowColor: "var(--color-primary)",
    rowContentAlign: "Left"
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

const Faquestions = () => {

    return (
        <section className="container faq__container">
            <h1>Frequently asked Questions</h1>
            <p>Now get a loan on your terms with our flexible EMI options and take control of what & when you pay</p>
            <Faq className='faq__data'
                data={data}
                styles={styles}
                config={config}
            />
        </section>
    );
}

export default Faquestions