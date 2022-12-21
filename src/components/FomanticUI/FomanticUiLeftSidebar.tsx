import React from "react";

const FomanticUiLeftSidebar: React.FC = () => {
    return (
        <div className="ui left vertical visible sidebar inverted menu">
            {
                (() => {
                    for (let i = 0; i < 12; i++) {
                        return (
                            <a className="item">
                                {i}
                            </a>
                        );
                    }
                })()
            }
        </div>
    );
}

export default FomanticUiLeftSidebar;