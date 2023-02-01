import { Fragment, useContext, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { AppContext } from './AppRoot';

const years = [
    { id: "Fall", name: '2020', key: 0 },
    { id: "Spring", name: '2020', key: 1 },
    { id: "Fall", name: '2021', key: 2 },
    { id: "Spring", name: '2021', key: 3 },
    { id: "Fall", name: '2022', key: 4 },
    { id: "Spring", name: '2022', key: 5 },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function SemSelector() {
  const [selected, setSelected] = useState(years[0])

  const {setYear, updateSemester} = useContext(AppContext);

  useEffect(() => {
    setYear(selected.name)
    updateSemester(selected.id)
  }, [selected])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-left text-sm font-medium text-gray-700">Semester</Listbox.Label>
          <div className="relative mt-1 mb-12">
            <Listbox.Button className="relative w-48 cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{selected.id + " " + selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-48 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {years.map((year) => (
                  <Listbox.Option
                    key={year.key}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-blue-600' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={year}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {year.id + " " + year.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-blue-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
