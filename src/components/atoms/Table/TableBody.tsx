/*
 * Copyright 2021 Dgraph Labs, Inc. and Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**@jsx jsx */
import { jsx } from "@emotion/react";
import { stylegun } from "helpers/stylegun";
import { styles } from "./Table.styles";
import { useTheme } from "hooks/useTheme";
import { TableBodyPropsType } from "./Table.types";

const TableBody = ({
    children,
    styles: stylesProp = {},
    ...props
}: TableBodyPropsType): JSX.Element => {
    const theme = useTheme();
    return (
        <tbody
            css={stylegun({
                css: {
                    ...styles.TableBody,
                    ...stylesProp,
                },
                theme,
            })}
            {...props}
        >
            {children}
        </tbody>
    );
};

export default TableBody;
