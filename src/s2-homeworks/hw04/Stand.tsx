import React, {ChangeEvent, useState} from 'react'
import s from './Stand.module.css'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'
import SuperButton from './common/c2-SuperButton/SuperButton'

const Stand = () => {
    const [stateForAllInputs, setValue] = useState<string>('')
    const [error, setError] = useState<string>('')

    const [stateForAllCheckboxes, setChecked] = useState<boolean>(false)
    //const onChangeHandler = (e:ChangeEvent<HTMLInputElement> ) => setChecked(e.currentTarget.checked)
    return (
        <div id={'hw4-stand'} className={s.stand}>
            <div className={s.inputs}>
                {/*совместим со старым кодом:*/}
                <div>
                    <SuperInputText
                        id={'hw4-super-input-like-old'}
                        value={stateForAllInputs}
                        onChange={(e) => {
                            error && setError('')
                            setValue(e.currentTarget.value)
                        }}
                    />
                </div>
                {/*инпут с ошибкой:*/}
                <div>
                    <SuperInputText
                        id={'hw4-super-input-with-error'}
                        value={stateForAllInputs}
                        onChangeText={setValue}
                        //spanClassName={'big'}
                        //setError={setError}
                        //className={'className'}
                        error={error}
                        onEnter={() => {
                            setError(
                                stateForAllInputs.trim()
                                    ? ''
                                    : 'Text is required'
                            )
                            setValue('')
                        }}
                    />
                </div>
            </div>

            <div className={s.buttons}>
                {/*обычная кнопка:*/}
                <div>
                    <SuperButton
                        id={'hw4-super-button-default'}
                    >
                        Default
                    </SuperButton>
                </div>
                {/*красная кнопка:*/}
                <div>
                    <SuperButton
                        id={'hw4-super-button-red'}
                        xType={'red'}>
                        Danger
                    </SuperButton>
                </div>
                {/*задизэйбленная кнопка:*/}
                <div>
                    <SuperButton
                        id={'hw4-super-button-disabled'}
                        xType={'red'}
                        disabled
                    >
                        Disabled
                    </SuperButton>
                </div>
                {/*задизэйбленная кнопка:*/}
                <div>
                    <SuperButton
                        id={'hw4-super-button-secondary'}
                        xType={'secondary'}
                    >
                        Secondary
                    </SuperButton>
                </div>
            </div>

            <div className={s.checkboxes}>
                {/*чекбокс с текстом:*/}
                <div>
                    <SuperCheckbox
                        id={'hw4-super-checkbox-with-text'}
                        checked={stateForAllCheckboxes}
                        onChangeChecked={setChecked}
                        className={'s.red'}
                    >
                        some text
                    </SuperCheckbox>
                </div>
                {/*совместим со старым кодом:*/}
                <div>
                    <SuperCheckbox
                        id={'hw4-super-checkbox-like-old'}
                        checked={stateForAllCheckboxes}
                        onChange={(e) => setChecked(e.currentTarget.checked)}
                        //onChange={onChangeHandler}
                    />
                </div>
            </div>
        </div>
    )
}

export default Stand
