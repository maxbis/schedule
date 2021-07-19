// https://iambumblehead.github.io/react-dropdown-now/?path=/story/docs-introduction--page

import { Dropdown } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';

const SelectKlas = ( { query, onQueryChange } )  => {
    return (
        <Dropdown
            baseClassName="rdn"
            className="clear"
            placeholder="Klas"
            options={['1A', '1B', '1C']}
            value={query}
            // onChange={(value) => console.log('change!', value)}
            onChange={(value)=>{ onQueryChange(value.value)}}
            onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
            onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
            onOpen={() => console.log('open!')} >
        </Dropdown>
    )
}

export default SelectKlas;
