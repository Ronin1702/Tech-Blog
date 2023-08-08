-- insert data into users table
INSERT INTO Users (user_name,email,password)
VALUES
('FakeNameA', 'a@fakeemail.com', 'fakepassword1'),
('FakeNameB', 'b@fakeemail.com', 'fakepassword2'),
('FakeNameC', 'c@fakeemail.com', 'fakepassword3'),
('FakeNameD', 'd@fakeemail.com', 'fakepassword4'),
('FakeNameE', 'e@fakeemail.com', 'fakepassword5'),
('FakeNameF', 'f@fakeemail.com', 'fakepassword6'),
('FakeNameG', 'g@fakeemail.com', 'fakepassword7'),
('FakeNameH', 'h@fakeemail.com', 'fakepassword8'),
('FakeNameI', 'i@fakeemail.com', 'fakepassword9'),
('FakeNameJ', 'j@fakeemail.com', 'fakepassword10');


-- insert data into the post table
INSERT INTO Post (post_title,post_content,post_date,user_id)
VALUES
    ('Innovations in Machine Learning', 'Machine learning (ML) has been at the forefront of technological advancements. The ability of machines to learn from data, without being explicitly programmed, has paved the way for groundbreaking applications. From personalized recommendations and speech recognition to fraud detection, ML plays a pivotal role. Continuous research and development in ML algorithms ensure they become more accurate and efficient over time. Ethical applications and eliminating biases remain challenges but hold potential for improved innovations.', '2023-06-01 09:00:00', 1),
('Navigating Digital Transformation', 'Digital transformation is reshaping businesses by integrating technology into all areas, fundamentally changing how they operate and deliver value to customers. Companies are leveraging digital tools to enhance customer experience, automate processes, and create new business models. Staying agile, upskilling workforce, and focusing on customer-centricity are crucial for successful digital transformation. Companies that fail to adapt risk becoming obsolete in the rapidly evolving digital landscape.', '2023-06-02 14:30:00', 2),
('Sustainability in Tech Industry', 'Sustainability has become an imperative in the tech sector. Companies are now focusing on creating eco-friendly products, reducing waste, and minimizing their carbon footprint. Green technologies, energy-efficient data centers, and recyclable materials are paving the way for a sustainable future. Collaboration, transparency, and a strong commitment to sustainability are vital for long-term success and a positive environmental impact.', '2023-06-03 11:45:00', 3),
('IoT: Connecting the World', 'The Internet of Things (IoT) is changing the way we interact with the world. From smart homes and wearables to connected cars and smart cities, IoT devices gather data, offer insights, and improve efficiency. Enhanced connectivity, real-time analytics, and interoperability are its major strengths. However, security remains a concern. Effective encryption and robust protocols are essential to safeguarding the vast web of connected devices.', '2023-06-04 08:15:00', 4),
('Robotics and Automation in Modern Industries', 'Robotics and automation are transforming industries by streamlining operations and increasing productivity. Robots are now being employed in manufacturing, healthcare, logistics, and even in household tasks. Automation offers precision, repeatability, and efficiency. However, the rise of robots also presents challenges, such as potential job displacement. Training and upskilling are vital for a workforce to coexist and thrive alongside automation.', '2023-06-05 17:00:00', 5),
('Virtual Reality: Immersive Experiences', 'Virtual Reality (VR) offers unparalleled immersive experiences by transporting users to simulated environments. From gaming and entertainment to education and training, VR''s potential applications are vast. Improved hardware, realistic graphics, and user-centric design are enhancing the VR experience. As VR technology becomes more affordable and accessible, it''s poised to redefine several sectors and how we interact with digital content.', '2023-06-06 10:45:00', 6),
('Tech Ethics in the Age of AI', 'As technological advancements, particularly in AI, become an integral part of our lives, ethical considerations take center stage. Ensuring fairness, transparency, and accountability in AI systems is essential. Tech companies must prioritize ethical guidelines to avoid biases, ensure privacy, and uphold human rights. Continuous dialogue, regulations, and ethical frameworks will guide responsible tech innovations.', '2023-06-07 15:20:00', 7),
('Decentralization with Distributed Systems', 'Distributed systems offer decentralization by dividing tasks among various nodes or computers. This approach enhances system reliability, scalability, and efficiency. Decentralized applications (DApps) and platforms promise transparency and reduced reliance on single points of control or failure. As more sectors adopt distributed systems, understanding their intricacies and potential is crucial for modern enterprises.', '2023-06-08 12:10:00', 8),
('Adapting to the Digital-first Era', 'The digital-first approach is no longer optional; it''s a necessity. Companies are prioritizing digital channels, tools, and techniques to meet the evolving needs of their customers. Embracing digital technologies ensures flexibility, personalization, and improved customer engagement. Businesses that seamlessly integrate physical and digital experiences stand out in the competitive landscape.', '2023-06-09 13:30:00', 9),
('Advancements in Neural Networks', 'Neural networks, inspired by human brain functions, have been instrumental in the progress of deep learning and AI. Their ability to process and learn from vast amounts of data has led to innovations in image and speech recognition, among other areas. As research continues, neural networks are expected to become more intricate, capable, and efficient, paving the way for more breakthroughs.', '2023-06-10 16:45:00', 10);

-- insert data into the comment table
INSERT INTO Comment (comment_content, user_id, post_id, comment_date) 
VALUES 
  ('I''ve always been intrigued by these tech advancements. This post just fueled my passion.', 5, 3, '2023-06-11 10:05:00'),
  ('Every time I read about such innovations, I get excited about the future. Great post!', 3, 9, '2023-06-12 10:05:00'),
  ('The pace at which technology is advancing is truly mesmerizing. Thanks for the insightful post.', 9, 7, '2023-06-13 10:05:00'),
  ('This article perfectly encapsulates the essence of the topic. Kudos to the writer!', 8, 2, '2023-06-14 10:05:00'),
  ('Every day we''re stepping into the future. Such innovations are a testament to that. Great read!', 2, 4, '2023-06-15 10:05:00'),
  ('I''m always on the lookout for tech insights, and this post didn''t disappoint. Brilliantly penned!', 4, 10, '2023-06-16 10:05:00'),
  ('The advancements discussed here are nothing short of revolutionary. Eager to witness them in action.', 7, 1, '2023-06-17 10:05:00'),
  ('Seeing such innovations, I''m optimistic about the technological future ahead. Great share!', 6, 5, '2023-06-18 10:05:00'),
  ('A well-structured post that offers deep insights. Much appreciated!', 1, 8, '2023-06-19 10:05:00'),
  ('Every time I think tech has peaked, I come across innovations like these. Astounding!', 10, 6, '2023-06-20 10:05:00'),
  ('This post offers such a wealth of information. I appreciate the insights!', 3, 5, '2023-06-21 10:05:00'),
  ('This article does a brilliant job breaking down complex concepts. Kudos!', 6, 2, '2023-06-22 10:05:00'),
  ('Every day we''re getting closer to a tech-driven utopia with innovations like this.', 8, 9, '2023-06-23 10:05:00'),
  ('As someone deeply passionate about tech, I find this to be a must-read. Great job!', 1, 7, '2023-06-24 10:05:00'),
  ('It''s surreal to see technology evolve at such a rapid pace in our times.', 4, 10, '2023-06-25 10:05:00'),
  ('This innovation is set to usher in a new era for the tech industry. Exciting!', 9, 3, '2023-06-26 10:05:00'),
  ('Thank you for enlightening us with this informative piece. Learned a lot!', 5, 1, '2023-06-27 10:05:00'),
  ('This feels like something straight out of a sci-fi novel. Truly futuristic!', 7, 8, '2023-06-28 10:05:00'),
  ('A game-changing tech development! It''s set to make waves.', 2, 4, '2023-06-29 10:05:00'),
  ('This tech is a game-changer! It will redefine the industry within no time.', 10, 6, '2023-06-30 10:05:00');