import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sreedhar" comment="Good One!" avatar={faker.image.avatar()}/> 
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Vaishnav" comment="Nice!" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Nishanth" comment="Yeah!!" avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>

    );
};

ReactDOM.render(<App/>, document.getElementById("root"));
