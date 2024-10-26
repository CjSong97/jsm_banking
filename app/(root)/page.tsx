import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'CJ', lastName: 'Me' ,
        email: 'test@test.com'
    };
  return (
    <section className='Home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account and transactions
                    efficiently"
                />

                <TotalBalanceBox
                    accounts = {[]}
                    totalBanks = {1}
                    totalCurrentBalance={1000.58}
                 />
            </header>
            <RightSidebar user={loggedIn}
            transactions={[]}
            banks={[]}/>
        </div>
    </section>
  )
}

export default Home