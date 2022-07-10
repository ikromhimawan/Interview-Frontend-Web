import Image from "next/image"
import { useRouter } from "next/router"
import Link from "next/Link"
const Layout = ({ children }) => {
    const router = useRouter()
    console.log(router);
    return (
        <div className="row m-0 vh-100">
            <div className="col-2 px-0 vh-100">
                <div className="header row justify-content-center">
                    <div className="position-relative col-6 py-4 mt-4">
                        <Image layout="fill" src="/logo/logo.svg" />
                    </div>
                </div>
                <ul className="mt-4 list-unstyled list-menu">
                    <li className={router.pathname == "/frontend/web/question/one" ? "active" : ""}>
                        <Link href="/frontend/web/question/one">
                            <a className="d-flex align-items-center">
                                <Image width={30} height={30} src="/icon/Q1.svg" />
                                <span className="ms-2 mb-1">Question 1</span>
                            </a>
                        </Link>
                    </li>
                    <li className={router.pathname == "/frontend/web/question/two" ? "active" : ""}>
                        <Link href="/frontend/web/question/two">
                            <a className="d-flex align-items-center">
                                <Image width={30} height={30} src="/icon/Q2.svg" />
                                <span className="ms-2 mb-1">Question 2</span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="col-10 vh-100 bg-light overflow-y-auto">
                {children}
            </div>
        </div>
    )
}
export default Layout