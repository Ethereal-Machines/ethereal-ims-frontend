/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react'

const forms = (props) => {
    return(
        <form onSubmit={props.onSubmitHandler}>
            {props.children}
        </form>
    )
}

export default forms