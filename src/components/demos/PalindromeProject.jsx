import React, { useState } from 'react';
import styles from './palindromeproject.module.css';

function palindrome(str) {

    const reg = /(?!_)\w/ig;

    //Input Validation. If the input exists, and has alphanumeric characters...
    if(!str || !reg.test(str)) { return null; }
        

    //Normalize the input and split it in half. I've two cases, one for even length strings, one for odd.
    const input = str.toLowerCase().match(reg);
    const halfOne = input.slice(0, Math.floor(input.length/2));

    //If the string length is even...
    if(input % 2 === 0) {

        //...get the second half and reverse it! Yes, I know I could split, 
        //reverse and join it, just testing out my own stuff.
        const preHalfTwo = input.slice(Math.ceil(input.length/2)-1);
        const halfTwo = [];
        for(const item of preHalfTwo) {
          halfTwo.unshift(item);
        }

        //Return the evaluation of their equality
        return halfOne.join('') === halfTwo.join('');
    
    //If the string length is odd...
    } else {

        //...do the same thing! No surprises here.
        const preHalfTwo = input.slice(Math.ceil(input.length/2));
        const halfTwo = [];
        for(const item of preHalfTwo) {
          halfTwo.unshift(item);
        }
        return halfOne.join('') === halfTwo.join('');
    
    }
}

function GoodResult() {
    return (
        <div className={styles.result}>
            <i class="fa-solid fa-check"></i>
            <p className={styles.good}>
                That's a palindrome!
            </p>
        </div>
    );
}

function BadResult() {
    return (
        <div className={styles.result}>
            <i className="fa-solid fa-xmark"></i>
            <p className={styles.bad}>
                That's a NOT palindrome...
            </p>
        </div>
    );
}

function NeutralResult() {
    return (
        <div className={styles.result}>
            <i className="fa-solid fa-i-cursor"></i>
            <p className={styles.neutral}>
                Enter some text!
            </p>
        </div>
    );
} 

export default function PalindromeProject() {
    const [inputText, setInputText] = useState('');

    function handleChange(event) {
        setInputText(event.target.value);
    }

    function showResult(value) {
        const result = palindrome(value);

        if(!value || value.length < 2) {
            //Show empty
            return NeutralResult();
        } else if (result) {
            //Show true
            return GoodResult();
        } else {
            //Show false
            return BadResult();
        }
    }

    return (
        <>
            <div>
                <h3>
                    Palindrome Checker
                </h3>
                <input 
                    type="text" 
                    value={inputText}
                    onChange={handleChange}
                    placeholder='Mr. Owl ate my metal worm'
                />
                { showResult(inputText) }
            </div>
        </>
    )
}

/*
<TextField 
                    id='palindrome-input' 
                    label='Palindrome' 
                    variant='filled' 
                    color='blue'
                    multiline
                    fullWidth 
                    minRows={10}
                    value={inputText}
                    onChange={handleChange}
                    placeholder='Mr. Owl ate my metal worm'
                    focused
                /> */