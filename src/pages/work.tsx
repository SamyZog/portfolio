/* eslint-disable max-len */
import { Card } from '@/components/Card';
import { Chip } from '@/components/Chip';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import clsx from 'clsx';
import { BiLink } from 'react-icons/bi';
import { RiGithubFill, RiExternalLinkFill } from 'react-icons/ri';
import Head from 'next/head';

const Work = () => (
  <>
    <Head>
      <title>Samy Zogeyb | Work</title>
    </Head>

    <section>
      <h1 className="flex justify-between">
        My Work 💻
        <ThemeSwitcher />
      </h1>

      <p>
        I have had the privilege of working with some amazing companies, teams and clients.
      </p>

      <p className={clsx('mt-8')}>
        <b>
          Some of the tech that I&apos;ve worked with:
        </b>
      </p>

      <ul className={clsx(
        'columns-2',
        'xs:columns-3',
        'sm:columns-3',
        'font-semibold',
        'text-indigo-500',
      )}
      >
        {[
          'React',
          'NextJS',
          'React Router',
          'MUI',
          'Chakra UI',
          'Webpack',
          'Redux',
          'Redux Toolkit',
          'Axios',
          'RTK Query',
          'React Query',
          'Rollup',
          'Vite',
          'Emotion',
          'Styled Components',
          'Framer Motion',
          'Tailwind',
          'Storybook',
        ].map((tech) => <li key={tech} className={clsx('[&:first-child]:mt-0')}>{tech}</li>)}
      </ul>

      <p>and more ...</p>

      <p className={clsx('mt-8')}>
        <b>
          Some of my recent work includes:
        </b>
      </p>

      <ul className={clsx(
        'p-0',
        'list-none',
        'grid',
        'gap-4',
        '[&>li]:p-0',
      )}
      >
        <li>
          <Card className={clsx(
            'bg-slate-100',
            'dark:bg-slate-900',
            'duration-200',
          )}
          >
            <h3 className={clsx('m-0')}>
              Software Engineer at
              {' '}
              <a href="https://kotelov.com/en/" target="_blank" rel="noreferrer">KOTELOV</a>
            </h3>

            <p>
              July 2022 - Present
            </p>

            <hr />

            <p>
              Delivering high-quality, responsive, and performant web applications for clients including
              {' '}
              <a className="inline-block" href="https://www.gazprom.com/" target="_blank" rel="noreferrer">
                GAZPROM
              </a>
              {' '}
              and
              {' '}
              <a className="inline-flex items-center" href="https://tflog.ru/?lang=en" target="_blank" rel="noreferrer">
                TFL Logistics
              </a>
            </p>

            <ul>
              <li>
                <p>
                  Sole developer and architect of an internal personal account web application for tracking shipments, managing orders, and generating reports
                </p>

                <p>
                  <i>
                    Mentions:
                    {' '}
                    <a href="https://kotelov.com/en/case/tfl-2/" target="_blank" rel="noreferrer">KOTELOV</a>
                    {' - '}
                    <a href="https://vc.ru/design/549231-25-000-tonn-gruza-iz-messendzherov-i-excel-tablichek-v-onlayn" target="_blank" rel="noreferrer">VC</a>
                  </i>
                </p>

                <a className="inline-flex items-center space-x-1" href="https://lk.tflog.ru/" target="_blank" rel="noreferrer">
                  <span>
                    TFL
                  </span>
                  <BiLink />
                </a>

                <ul className={clsx(
                  'p-0',
                  'list-none',
                  '[&>li]:p-0',
                  'flex',
                  'flex-wrap',
                  'mr-2',
                  'mt-2',
                )}
                >
                  {['React', 'Vite', 'Typescript', 'Redux Toolkit', 'RTK Query'].map((tech) => (
                    <li key={tech}>
                      <Chip className={clsx(
                        'bg-slate-200',
                        'dark:bg-slate-800',
                        'text-indigo-400',
                        'dark:text-indigo-600',
                      )}
                      >
                        {tech}
                      </Chip>
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <p>
                  Part of a team developing an admin panel and client portal for a car auction web application
                </p>

                <ul className={clsx('list-none', 'p-0', '[&>*]:p-0')}>
                  <li>
                    <p>
                      Admin panel:
                      {' '}
                      <a className="inline-flex items-center space-x-1" href="https://admin-auto.gpbl.ru/admin" target="_blank" rel="noreferrer">
                        <span>
                          GPBL Admin Panel
                        </span>
                        <BiLink />
                      </a>
                    </p>
                  </li>

                  <li>
                    <p>
                      Public auction:
                      {' '}
                      <a className="inline-flex items-center space-x-1" href="https://auction.autogpbl.ru/user" target="_blank" rel="noreferrer">
                        <span>
                          GPBL Auto Leasing
                        </span>
                        <BiLink />
                      </a>
                    </p>
                  </li>
                </ul>

                <ul className={clsx(
                  'p-0',
                  'list-none',
                  '[&>li]:p-0',
                  'flex',
                  'flex-wrap',
                  'mr-2',
                  'mt-2',
                )}
                >
                  {['React', 'Emotion', 'NextJS', 'Redux Toolkit', 'React Query', 'Socket IO', 'Typescript'].map((tech) => (
                    <li key={tech}>
                      <Chip className={clsx(
                        'bg-slate-200',
                        'dark:bg-slate-800',
                        'text-indigo-400',
                        'dark:text-indigo-600',
                      )}
                      >
                        {tech}
                      </Chip>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </Card>
        </li>

        <li>
          <Card className={clsx(
            'bg-slate-100',
            'dark:bg-slate-900',
            'duration-200',
          )}
          >
            <h3 className={clsx('m-0')}>
              Front-End Developer at
              {' '}
              <a href="https://coin32.com/" target="_blank" rel="noreferrer">Coin32</a>
            </h3>

            <p>
              September 2021 - June 2022
            </p>

            <hr />

            <p>
              Developed and styled a web platform for vendor software distribution, including authentication, user management, tabled data and a catalog of software products
            </p>

            <ul>
              <li>
                <p>
                  Migrated a legacy Backbone application to React
                </p>
              </li>

              <li>
                <p>
                  Built a custom React component library
                </p>
              </li>

              <li>
                <p>
                  Code reviews and documentation
                </p>
              </li>

            </ul>

            <ul className={clsx(
              'p-0',
              'list-none',
              '[&>li]:p-0',
              'flex',
              'flex-wrap',
              'mr-2',
              'mt-2',
            )}
            >
              {['React', 'Styled Components', 'React Router', 'Axios', 'Storybook', 'JSDoc', 'Webpack'].map((tech) => (
                <li key={tech}>
                  <Chip className={clsx(
                    'bg-slate-200',
                    'dark:bg-slate-800',
                    'text-indigo-400',
                    'dark:text-indigo-600',
                  )}
                  >
                    {tech}
                  </Chip>
                </li>
              ))}
            </ul>

          </Card>
        </li>
      </ul>

      <p className={clsx('mt-8')}>
        <b>
          Some of my other projects that I made as a hobby:
        </b>
      </p>

      <ul className={clsx(
        'p-0',
        'list-none',
        'grid',
        'gap-4',
        '[&>li]:p-0',
      )}
      >
        <li>
          <Card className={clsx(
            'bg-slate-100',
            'dark:bg-slate-900',
            'duration-200',
          )}
          >
            <div className={clsx(
              'flex',
              'justify-between',
            )}
            >
              <h3 className={clsx('m-0')}>Toastice</h3>
              <div className={clsx(
                'flex',
                'items-center',
                'space-x-1',
              )}
              >
                <a href="https://github.com/SamyZog/toastice" target="_blank" rel="noreferrer">
                  <RiGithubFill fontSize={20} />
                </a>

                <a href="https://toastice-docs.vercel.app/" target="_blank" rel="noreferrer">
                  <RiExternalLinkFill fontSize={20} />
                </a>
              </div>
            </div>

            <hr />

            <p>
              A lightweight, responsive and customizable toast notification library for React
            </p>

            <ul className={clsx(
              'p-0',
              'list-none',
              '[&>li]:p-0',
              'flex',
              'flex-wrap',
              'mr-2',
              'mt-2',
            )}
            >
              {['React', 'Tailwind', 'Typescript', 'Vite'].map((tech) => (
                <li key={tech}>
                  <Chip className={clsx(
                    'bg-slate-200',
                    'dark:bg-slate-800',
                    'text-indigo-400',
                    'dark:text-indigo-600',
                  )}
                  >
                    {tech}
                  </Chip>
                </li>
              ))}
            </ul>
          </Card>
        </li>

        <li>
          <Card className={clsx(
            'bg-slate-100',
            'dark:bg-slate-900',
            'duration-200',
          )}
          >
            <div className={clsx(
              'flex',
              'justify-between',
            )}
            >
              <h3 className={clsx('m-0')}>GoRun</h3>
              <div className={clsx(
                'flex',
                'items-center',
                'space-x-1',
              )}
              >
                <a href="https://github.com/SamyZog/gorun" target="_blank" rel="noreferrer">
                  <RiGithubFill fontSize={20} />
                </a>

                <a href="https://gorun-prod.vercel.app/auth" target="_blank" rel="noreferrer">
                  <RiExternalLinkFill fontSize={20} />
                </a>
              </div>
            </div>

            <hr />

            <p>
              An app for tracking outdoor runs with real-time GPS map display, letting users track and record run distance and duration
            </p>

            <ul className={clsx(
              'p-0',
              'list-none',
              '[&>li]:p-0',
              'flex',
              'flex-wrap',
              'mr-2',
              'mt-2',
            )}
            >
              {['React', 'Chakra', 'Firebase', 'Redux'].map((tech) => (
                <li key={tech}>
                  <Chip className={clsx(
                    'bg-slate-200',
                    'dark:bg-slate-800',
                    'text-indigo-400',
                    'dark:text-indigo-600',
                  )}
                  >
                    {tech}
                  </Chip>
                </li>
              ))}
            </ul>
          </Card>
        </li>

        <li>
          <Card className={clsx(
            'bg-slate-100',
            'dark:bg-slate-900',
            'duration-200',
          )}
          >
            <div className={clsx(
              'flex',
              'justify-between',
            )}
            >
              <h3 className={clsx('m-0')}>Space Shooter</h3>
              <div className={clsx(
                'flex',
                'items-center',
                'space-x-1',
              )}
              >
                <a href="https://github.com/SamyZog/space-shooter" target="_blank" rel="noreferrer">
                  <RiGithubFill fontSize={20} />
                </a>

                <a href="https://samyzog.github.io/space-shooter" target="_blank" rel="noreferrer">
                  <RiExternalLinkFill fontSize={20} />
                </a>
              </div>
            </div>

            <hr />

            <p>
              A Space Invaders like game, made using HTML, Sass and JS. Bundled with my custom webpack config
            </p>

            <ul className={clsx(
              'p-0',
              'list-none',
              '[&>li]:p-0',
              'flex',
              'flex-wrap',
              'mr-2',
              'mt-2',
            )}
            >
              {['JavaScript', 'SASS', 'Webpack'].map((tech) => (
                <li key={tech}>
                  <Chip className={clsx(
                    'bg-slate-200',
                    'dark:bg-slate-800',
                    'text-indigo-400',
                    'dark:text-indigo-600',
                  )}
                  >
                    {tech}
                  </Chip>
                </li>
              ))}
            </ul>
          </Card>
        </li>
      </ul>
    </section>
  </>

);

export default Work;
