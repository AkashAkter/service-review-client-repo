import React from 'react';

const Comment = () => {
    return (
        <div className='bg-white py-16 rounded-t-3xl shadow-lg shadow-indigo-500/50 my-8'>
            <div className='text-center my-8'>
                <h1 className='text-4xl text-black'>COMMENT <span className='text-orange-400'>SECTION</span></h1>
                <p className='text-slate-500'>If you are looking for a way to know what your clients thing about your galleries, then you are on the right way.<br />Your client can submit a comment with one click and you will get notification directly to your dashboard.</p>
            </div>
            <div className=''>
                <form>
                    <div className='grid grid-cols-1 justify-items-center'>
                        <div >
                            <input type="text" placeholder="ADD COMMENT" className="input text-center bg-white input-bordered input-success h-40 w-96 max-w-xs rounded-3xl shadow-2xl shadow-indigo-500/100" />
                        </div>
                        <div className='mt-8'>
                            <button className="bg-cyan-400 text-black hover:bg-sky-400 shadow-lg shadow-cyan-500/100 btn btn-block">Subscribe</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Comment;