import React from 'react';
import PropTypes from 'prop-types';

function Tree({ allowDropOnRoot }) {
    return <div />;
}

Tree.propTypes = {
    classes: PropTypes.object,
};

Tree.defaultProps = {
    classes: {},
    parentSource: 'parent_id',
};

export default Tree;
