import React from 'react'
import Virtualized from '../components/Virtualized';

const VirtualListDemo = () => {
    const longList = Array.from({ length: 10000 }, (_, index) => index + 1);
    return (
        <Virtualized
            list={longList}
            width={320}
            height={480}
            itemHeight={24} />
    )
}

export default VirtualListDemo