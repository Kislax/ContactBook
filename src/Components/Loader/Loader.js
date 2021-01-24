import React from 'react'

export const Loader = () => (
    <div style={{display: 'flex', justifyContent: 'center', paddingTop: '2rem'}}>
            <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
    </div>
)


