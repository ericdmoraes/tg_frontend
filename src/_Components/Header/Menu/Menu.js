import React, { useState } from 'react';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Tooltip from '@material-ui/core/Tooltip';

import { Icon } from './MenuStyles';

export default function Menu() {
    const [tooltip, setTooltip] = useState(false);

    const handleTooltip = () => {
        console.log('oi', tooltip);
        setTooltip(!tooltip);
    };

    return (
        <ClickAwayListener>
            <div>
                <Tooltip
                    PopperProps={{
                        disablePortal: true,
                    }}
                    onClose={handleTooltip}
                    open={tooltip}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title={
                        <div style={{ width: 50, height: 50, color: 'red' }}>
                            <p>Eric</p>
                        </div>
                    }
                >
                    <Icon onClick={handleTooltip} />
                </Tooltip>
            </div>
        </ClickAwayListener>
    );
}
