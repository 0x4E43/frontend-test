export default function Login() {
    return (
        <>
            <p>Login Works</p>
            <div>
                <div class="card w-96 bg-base-100 shadow-xl m-auto">
                    <div class="card-body">
                        <h2 class="card-title text-white font-bold">Login!</h2>
                        <input type="text" placeholder="Your name here" class="input input-bordered input-success w-full max-w-xs text-white" />
                        <input type="email" placeholder="Your email here" class="input input-bordered input-success w-full max-w-xs text-white" />
                        <input type="password" placeholder="**************" class="input input-bordered input-success w-full max-w-xs text-white" />
                        <div class="card-actions justify-end">
                            <button class="btn btn-accent">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}