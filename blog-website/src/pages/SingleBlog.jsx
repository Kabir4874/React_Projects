import { useLoaderData } from "react-router-dom";
import { FaUser, FaClock } from "react-icons/fa";
import SideBar from "../components/SideBar";

const SingleBlog = () => {
  const data = useLoaderData();
  const {
    title,
    image,
    category,
    author,
    published_date,
    reading_time,
    content,
  } = data[0];
  console.log(data);
  return (
    <div>
      <div className=" py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Single Blog Page
        </h2>
      </div>
      {/* Blog Details  */}
      <div className=" max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className=" lg:w-3/4 mx-auto">
          <div>
            <img src={image} className=" w-full mx-auto rounded" />
          </div>
          <h2 className=" text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            {title}
          </h2>
          <p className=" mb-3 text-gray-600">
            <FaUser className=" inline-flex items-center mr-2" /> {author} |{" "}
            {published_date}
          </p>
          <p className=" mb-3 text-gray-600">
            <FaClock className=" inline-flex items-center mr-2" />{" "}
            {reading_time}
          </p>
          <p className=" text-base text-gray-500 mb-6">{content}</p>
          <div className=" text-base text-gray-500">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              aperiam alias, ad iusto adipisci sed placeat quam ut distinctio
              corporis in, velit soluta doloribus ipsa sit dolorem. Quos in
              asperiores, vitae doloremque hic numquam sunt sit quasi est
              eligendi, unde cupiditate impedit mollitia porro voluptates odit?
              Tenetur ad aperiam laboriosam!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              aperiam alias, ad iusto adipisci sed placeat quam ut distinctio
              corporis in, velit soluta doloribus ipsa sit dolorem. Quos in
              asperiores, vitae doloremque hic numquam sunt sit quasi est
              eligendi, unde cupiditate impedit mollitia porro voluptates odit?
              Tenetur ad aperiam laboriosam!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              aperiam alias, ad iusto adipisci sed placeat quam ut distinctio
              corporis in, velit soluta doloribus ipsa sit dolorem. Quos in
              asperiores, vitae doloremque hic numquam sunt sit quasi est
              eligendi, unde cupiditate impedit mollitia porro voluptates odit?
              Tenetur ad aperiam laboriosam!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
              dignissimos quam sint. Dolore molestias reprehenderit cumque omnis
              sequi, accusantium consectetur temporibus, facilis blanditiis at
              nisi. Id officia veritatis sint, fugit, minus soluta amet expedita
              dicta assumenda repellat minima officiis iste voluptates
              asperiores quibusdam pariatur dolorum maiores atque! Rerum vero
              aperiam nam? Tempora vitae blanditiis vel, ullam in cumque
              voluptas dicta quisquam officia placeat officiis inventore
              <br /> <br />
              perspiciatis culpa! Tempore cupiditate deserunt placeat unde fuga,
              autem amet sed sint facere delectus error soluta vitae
              consequuntur libero est impedit eligendi sunt. Commodi, deserunt
              sunt pariatur recusandae incidunt doloribus eum officia, et animi
              molestiae aspernatur asperiores nobis explicabo adipisci quo
              exercitationem modi. Dignissimos eveniet vel adipisci dolore nisi
              dolorum tempora, ex reprehenderit id obcaecati cumque dolores odio
              autem fugiat, quisquam corporis quos accusantium ab non illo! Eum
              doloremque quo exercitationem aliquid expedita et, delectus neque,
              repellendus sit quos ipsa ipsum provident quibusdam aspernatur
              perferendis! Quisquam delectus repellat eos quasi voluptatem
              <br /> <br />
              architecto corrupti, nihil dolorem culpa ipsa soluta ad ratione
              fugiat perferendis, ullam dolorum, sint atque aliquid esse?
              Eligendi porro cumque esse delectus alias eius eveniet tenetur
              voluptatum fuga aut, perferendis illo beatae ad? Velit maiores nam
              ullam fuga at ipsam enim, dolorum, eligendi excepturi, modi
              explicabo ea tempore repudiandae hic porro facilis quibusdam ab
              reprehenderit! Animi, maxime natus eveniet vel voluptates
              accusamus, consectetur non nostrum id praesentium libero! Nostrum,
              autem corrupti ut amet vitae a recusandae ex ea consequuntur, ad
              perferendis possimus sequi quaerat corporis placeat dolore
              praesentium dolorum ullam aspernatur doloremque beatae nisi aut.
              <br /> <br />
              Natus alias recusandae magni, consequuntur incidunt labore aperiam
              temporibus at nam repellat commodi adipisci, qui facilis accusamus
              iste minus magnam. Iusto, reprehenderit maiores? Sint nesciunt
              inventore voluptatum, necessitatibus ab quas maxime modi odit
              minus itaque. Iure voluptas non sit facere explicabo, blanditiis
              placeat, ducimus unde minima dicta qui autem quam ad nostrum
              cumque quidem. Ipsa praesentium accusantium, tempore soluta
              doloremque consequuntur, voluptates suscipit, nulla eaque numquam
              illum veritatis sunt maiores eligendi quibusdam dolorum fugit
              ducimus voluptas quas est totam possimus labore? Corrupti totam
              odit laudantium nemo recusandae provident facilis atque nobis
              <br /> <br />
              culpa placeat. Laborum quas quaerat obcaecati voluptas expedita
              tenetur modi sequi ea veniam iure eveniet quod id nostrum aliquam
              voluptatem, vel deleniti. Maiores iusto libero error quis est
              natus voluptate rerum, quisquam reiciendis, deserunt possimus
              voluptatem. Voluptate nemo ratione officiis recusandae dignissimos
              fugit ea, saepe ipsum quas laboriosam consectetur veniam, ut autem
              illum, adipisci provident eius modi. Inventore quaerat non
              placeat, rem eius reiciendis laborum delectus harum molestias,
              doloribus neque ut autem animi ipsam rerum quia enim beatae quas
              id! Reprehenderit facilis dicta, reiciendis, voluptatum aliquam
              <br /> <br />
              aperiam esse sint sequi assumenda accusantium odio vitae rerum
              eveniet iusto velit dolorem doloribus officiis odit aspernatur
              officia cumque unde! Voluptates laborum labore pariatur natus
              consectetur nemo vel odit atque fugit temporibus laboriosam ex
              accusantium, quis iusto? Reprehenderit facilis molestiae corporis
              maxime nulla, et eum nihil tempore enim officia? Dignissimos
              repudiandae omnis, assumenda inventore et nisi corporis pariatur
              odit aliquam dolor odio consectetur expedita exercitationem
              recusandae nostrum, modi tempora blanditiis minus id?
            </p>
          </div>
        </div>
        <div className=" lg:w-1/2">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
