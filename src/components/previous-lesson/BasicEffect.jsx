import { useState, useEffect } from "react";

import React from 'react'

function BasicEffect() {
  useEffect(() => {
    console.log('Shalom');
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default BasicEffect