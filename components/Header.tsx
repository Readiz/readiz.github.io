import React from 'react';

interface Props {}

const Header: React.FC<Props> = (props) => {
  return (
    <>
        <div style={
          {
            border: '1px solid',
            borderRadius: '5px',
            padding: 10,
          }
        }>
          <div style={
            {
              fontSize: 40,
              fontWeight: 800
            }
          }>
            Header Title
          </div>
          <div style={
            {
              fontSize: 15,
              color: 'grey'
            }
          }>
            Written by Readiz / 2023-04-28 09:30
          </div>
        </div>
    </>
  )
}

export default Header
