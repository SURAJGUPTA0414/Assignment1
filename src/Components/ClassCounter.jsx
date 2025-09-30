import React, { Component } from 'react'

export default class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <h3>Assignment-2 Class Counter Application</h3>
                <p>{count}</p>

                <button
                    onClick={() => this.setState(prev => ({ count: prev.count + 1 }))}
                >
                    Increment
                </button>

                <button
                    onClick={() =>
                        this.setState(prev => ({ count: Math.max(prev.count - 1, 0) }))
                    }
                    disabled={count === 0}
                >
                    Decrement
                </button>
            </div>
        );
    }
}
