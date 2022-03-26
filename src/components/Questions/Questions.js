import React from 'react';
import './Questions.css';
import { FaHandPointRight } from 'react-icons/fa';

const Questions = () => {
    return (
        <div>
            <h1 style={{ borderBottom: "2px solid black", display: "inline-block" }}>Questions And Answer</h1>
            <div className='question-items'>
                <h2><FaHandPointRight></FaHandPointRight> Props এবং state মধ্যে পার্থক্য কি??</h2>
                <div className='question-item'>
                    <ul>
                        <h4>Props</h4>
                        <li>Data এক component থেকে অন্য component প্রেরণ করা হয়।</li>
                        <li>এটি Immutable (পরিবর্তন করা যাবে না)।</li>
                        <li>State এবং functional components সাথে Props ব্যবহার করা যেতে পারে।</li>
                    </ul>
                    <ul>
                        <h4>State</h4>
                        <li>Data শুধুমাত্র components এর মধ্যে পাস করা হয়.</li>
                        <li>এটি Mutable  (পরিবর্তন করা যাবে)।</li>
                        <li>State শুধুমাত্র State componet/Class component এর সাথে ব্যবহার করা যেতে পারে।</li>
                    </ul>
                </div>
                <h2><FaHandPointRight></FaHandPointRight> কিভাবে useState কাজ করে???</h2>
                <div className='question-item'>
                    <h3>Ans:- </h3>
                    <p>useState হল একটি হুক যা ডেভেলপারকে functional component এ state variable সংরক্ষণ করতে দেয়। এটি একটি অ্যারেতে value, objects সংরক্ষণ করতে পারে। useState হল একটি অ্যারে, যাতে 2টি উপাদান রয়েছে। একটি একটি start variable এবং অন্যটি একটি store function,  Set function developer কে future এ ব্যবহারের জন্য অ্যারে হিসাবে স্টেট ভেরিয়েবলের মান সংরক্ষণ করতে সহায়তা করে।</p>
                </div>
            </div>
        </div>
    );
};

export default Questions;