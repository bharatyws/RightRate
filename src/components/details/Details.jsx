import React from 'react'
import './details.css'

const Details = () => {
  return (
    <section className=' container details__container'>
        <div className="info__one">
            <h3 className='detail__heading'>Small Personal Loan</h3>
            <p className='detail__para'>A small personal loan also called an instant cash loan is an unprotected or unsecured loan that could be used for personal financial needs. It is a very simple and quick way to get cash at the time of urgency. This serves as a convenient way to deal with financial emergencies without having to disturb your monthly savings. The repayment structure is flexible allowing the customer to repay according to their comfort.</p>
        </div>
        <div className="info__two">
            <h3 className='detail__heading'>Features of personal loan</h3>
            <p className='detail__para'>
                <ol>
                    <li>A mini personal loan can be sanctioned without the need of pledging any kind of collateral.</li>
                    <li>The application process requires you to submit very few documents making it a lot more convenient.</li>
                    <li>The verification process is straightforward leading to quick loan approval and hence making it the perfect option to rely on at the time of financial emergencies.</li>
                    <li>The loan amount will be wired directly to the applicant’s account within 30 minutes* of document verification and loan approval.</li>
                    <li>Repayment of the small amount borrowed as a personal loan can be done in EMIs according to customers' convenience.</li>
                </ol>
            </p>
        </div>
        <div className="info__three">
            <h3 className='detail__heading'>Eligibility Criteria to get a loan</h3>
            <p className='detail__para'>
            You need to meet the below basic criteria to be eligible for a personal loan. You can use personal loan eligibility checker to verify the same.
            <br /> <br />
            <ol>
                <li>You should be a citizen of India.</li>
                <li>The minimum age to apply for a small personal loan is 21 years.</li>
                <li>The individual needs to be self-employed or have a certain kind of income.</li>
                <li>The age of the customer at the time of maturity of the loan should be less than 65 years.</li>
            </ol>
            </p>
        </div>
        <div className="info__four">
            <h3 className='detail__heading'>Documents required for loan</h3>
            <p className='detail__para'>
                <ol>
                    <li>ID, Age and Address Proof (Any one) - Valid Passport, Voter ID, Aadhar Card, PAN Card, Valid Driving License</li>
                    <li>Income Proof for Salaried – Salary Slips/ Bank Statements/ Form-16 and Income tax returns</li>
                    <li>Other Documents – Application form with photograph duly signed, last 6 months bank statements and PAN card photocopy</li>
                </ol>
            </p>
        </div>
        <div className="info__four">
            <h3 className='detail__heading'>Repayment of loan</h3>
            <p className='detail__para'>
            Personal Loan Interest rates are set based on the customers’ credit history. A small personal loan is usually repaid in one to five years but it may vary depending on the policy you opt for. There is also an option of repaying the mini personal loan before the maturity date without any extra fees which could be a great way to save on the interest*.
            <br/><br />
            *Terms and Conditions apply
            </p>
        </div>
    </section>
  )
}

export default Details