<?php

namespace Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * Box
 *
 * @ORM\Table(name="box")
 * @ORM\Entity
 * @apiResource()
 */
class Box
{
    /**
     * @var int
     *
     * @ORM\Column(name="box_id", type="bigint", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $boxId;

    /**
     * @var string
     *
     * @ORM\Column(name="nom", type="string", length=50, nullable=false)
     */
    private $nom;

    /**
     * @var float
     *
     * @ORM\Column(name="prix", type="float", precision=10, scale=0, nullable=false)
     */
    private $prix;

    /**
     * @var int|null
     *
     * @ORM\Column(name="pieces", type="integer", nullable=true)
     */
    private $pieces;

    /**
     * @var string
     *
     * @ORM\Column(name="image", type="string", length=50, nullable=false)
     */
    private $image;

    /**
     * @var string|null
     *
     * @ORM\Column(name="saveurs", type="string", length=50, nullable=true)
     */
    private $saveurs;
}
