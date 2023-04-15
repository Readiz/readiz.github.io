/**
 * @title Style Example
 */

import React from 'react';
import Comment from '../../components/Comment';
import { Link } from 'react-router-dom';
// import './index.module.css';

const Page = () => {
  return (
    <div className="container mx-auto px-6">
        <div className="flex flex-row">
            <div className="basis-1/4 md:basis-1/3">01</div>
            <div className="basis-1/4 md:basis-1/3">02</div>
            <div className="basis-1/2 md:basis-1/3">03</div>
        </div>
        <Comment />
    </div>
  )
}

export default Page
